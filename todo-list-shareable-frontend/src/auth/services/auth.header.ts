export default function authHeader(): Record<string, string> {
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && user.accessToken) {
        // for Node.js Express back-end
        return { 'x-access-token': user.accessToken };
    } else {
        return {};
    }
}