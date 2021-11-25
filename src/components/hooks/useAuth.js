export default function useAuth() {
	const isLoggedin = localStorage.getItem('isLoggedin');

	return isLoggedin ? true : false;
}
