

export const useLoggedInUser = () => {
    return JSON.parse(localStorage.getItem("AUTH_ADMIN_USER"));
}