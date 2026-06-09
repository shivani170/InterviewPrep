const { RBACService } = require('./RBACService');
const {
  UserRoleRepository,
  RolePermissionRepository
} = require('./Repository');

// Minimal in-memory stand-in for a MongoDB collection.
// Supports the `.find(query).toArray()` chain the repos rely on.
class MockCollection {
  constructor(docs) {
    this.docs = docs;
  }

  find(query) {
    const results = this.docs.filter(doc =>
      Object.entries(query).every(([k, v]) => doc[k] === v)
    );
    return { toArray: async () => results };
  }
}

async function main() {
  // Seed data: which roles a user has in a tenant...
  const userRoles = new MockCollection([
    { userId: 'u1', tenantId: 't1', id: 'role_admin' },
    { userId: 'u1', tenantId: 't1', id: 'role_viewer' },
    { userId: 'u2', tenantId: 't1', id: 'role_viewer' }
  ]);

  // ...and which permissions each role grants.
  const rolePermissions = new MockCollection([
    { roleId: 'role_admin', permission: 'billing:write' },
    { roleId: 'role_admin', permission: 'billing:read' },
    { roleId: 'role_viewer', permission: 'billing:read' }
  ]);

  const rbac = new RBACService(
    new UserRoleRepository(userRoles),
    new RolePermissionRepository(rolePermissions)
  );

  console.log('u1 billing:write ->', await rbac.hasPermission('u1', 't1', 'billing:write')); // true (admin)
  console.log('u2 billing:write ->', await rbac.hasPermission('u2', 't1', 'billing:write')); // false (viewer only)
  console.log('u2 billing:read  ->', await rbac.hasPermission('u2', 't1', 'billing:read'));  // true
  console.log('u1 in t2         ->', await rbac.hasPermission('u1', 't2', 'billing:read'));  // false (wrong tenant)
}

main();
