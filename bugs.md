## Bug Descriptions

### Bug #1: Missing Await in Authentication

**Description:**  
The asynchronous call to `User.authenticate` in the login route handler was missing the `await` keyword, leading to potential race conditions and unhandled promises.

---

### Bug #2: Unauthorized User Updates

**Description:**  
The application allowed non-admin users to update information for any user, violating the intended access control that restricts users to only update their own information unless they are admins.

---

### Bug #3: Unrestricted Field Updates

**Description:**  
The user update function did not properly restrict the fields that could be updated, allowing users to modify fields not intended to be editable or even add new, unrecognized fields.

---

### Bug #4: Non-Blocking Delete Operation

**Description:**  
The deletion operation in the `DELETE /:username` route did not use `await` with `User.delete`, potentially causing the server to respond before the operation completed and not properly handling errors from the deletion process.
