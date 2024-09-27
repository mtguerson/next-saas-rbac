# Next.js SaaS + RBAC

This project contains all the necessary boilerplate to setup a multi-tenant SaaS with Next.js including authentication and RBAC authorization.

## Features

### Authentication

- [X] It should be able to authenticate using e-mail & password;
- [X] It should be able to authenticate using Github account;
- [X] It should be able to recover password using e-mail;
- [X] It should be able to create an account (e-mail, name and password);

### Organizations

- [X] It should be able to create a new organization;
- [X] It should be able to get organizations to which the user belongs;
- [X] It should be able to update an organization;
- [X] It should be able to shutdown an organization;
- [X] It should be able to transfer organization ownership;

### Invites

- [X] It should be able to invite a new member (e-mail, role);
- [X] It should be able to accept an invite;
- [X] It should be able to revoke a pending invite;

### Members

- [X] It should be able to get organization members;
- [X] It should be able to update a member role;

### Projects

- [X] It should be able to get projects within a organization;
- [X] It should be able to create a new project (name, url, description);
- [X] It should be able to update a project (name, url, description);
- [X] It should be able to delete a project;

### Billing

- [X] It should be able to get billing details for organization ($20 per project / $10 per member excluding billing role);

## RBAC

Roles & permissions.

### Roles

- Owner (count as administrator)
- Administrator
- Member
- Billing (one per organization)
- Anonymous

### Permissions table

|                          | Administrator | Member | Billing | Anonymous |
| ------------------------ | ------------- | ------ | ------- | --------- |
| Update organization      | ✅            | ❌     | ❌      | ❌        |
| Delete organization      | ✅            | ❌     | ❌      | ❌        |
| Invite a member          | ✅            | ❌     | ❌      | ❌        |
| Revoke an invite         | ✅            | ❌     | ❌      | ❌        |
| List members             | ✅            | ✅     | ✅      | ❌        |
| Transfer ownership       | ⚠️            | ❌     | ❌      | ❌        |
| Update member role       | ✅            | ❌     | ❌      | ❌        |
| Delete member            | ✅            | ⚠️     | ❌      | ❌        |
| List projects            | ✅            | ✅     | ✅      | ❌        |
| Create a new project     | ✅            | ✅     | ❌      | ❌        |
| Update a project         | ✅            | ⚠️     | ❌      | ❌        |
| Delete a project         | ✅            | ⚠️     | ❌      | ❌        |
| Get billing details      | ✅            | ❌     | ✅      | ❌        |
| Export billing details   | ✅            | ❌     | ✅      | ❌        |

> ✅ = allowed
> ❌ = not allowed
> ⚠️ = allowed w/ conditions
#### Conditions

- Only owners may transfer organization ownership;
- Only administrators and project authors may update/delete the project;
- Members can leave their own organization;

### Screenshots

![image](https://github.com/user-attachments/assets/70cac864-f507-43df-af41-0eb23d4aba98)
![image](https://github.com/user-attachments/assets/3271f824-098a-4c2e-a9c8-5f98f66b02c2)
![image](https://github.com/user-attachments/assets/a96fc8b0-1213-4616-b0f0-d7eb5482416a)
![image](https://github.com/user-attachments/assets/d8942357-567c-4c1f-a4c1-60e41e3c5bb3)
