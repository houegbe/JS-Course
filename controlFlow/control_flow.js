let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userType = "suscriber";
let userCategory;
 
if (userRole === "admin") {
    accessLevel = "Full access granted";
 } else if (userRole === "manager") {
    accessLevel = "Limited access granted";
 } else {
    accessLevel = "No access granted";
 }

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, Admin!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "suscriber":
        userCategory = "Suscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);