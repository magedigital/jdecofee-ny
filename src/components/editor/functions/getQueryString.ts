export default function getQueryString(query: FilterQueryT[]): string {
    return query.map((item) => `${item.name}=${item.value}`).join('&');
}
