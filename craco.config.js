const CracoAlias = require('craco-alias');

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                tsConfigPath: './tsconfig.json',
            },
        },
    ],
    webpack: {
        configure: (webpackConfig) => {
            // В CRA правила лежат внутри oneOf
            const oneOfRule = webpackConfig.module.rules.find((rule) => Array.isArray(rule.oneOf));

            if (oneOfRule) {
                // Ищем babel-loader — он обрабатывает JS/TS
                const babelRule = oneOfRule.oneOf.find(
                    (rule) => rule.loader && rule.loader.includes('babel-loader'),
                );

                if (babelRule) {
                    // Меняем exclude так, чтобы пропускать наш SDK
                    const originalExclude = babelRule.exclude;
                    const sdkPattern = /node_modules[/\\]@promoinstance[/\\]sdk/;

                    if (typeof originalExclude === 'function') {
                        babelRule.exclude = (path) => {
                            if (sdkPattern.test(path)) return false;
                            return originalExclude(path);
                        };
                    } else if (originalExclude instanceof RegExp) {
                        babelRule.exclude = (path) => {
                            if (sdkPattern.test(path)) return false;
                            return originalExclude.test(path);
                        };
                    } else {
                        // Если exclude — массив или нет вообще
                        babelRule.include = [__dirname, /node_modules[/\\]@promoinstance[/\\]sdk/];
                    }
                }
            }

            return webpackConfig;
        },
    },
};
