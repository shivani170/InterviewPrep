class RBACService {
  constructor(
    userRoleRepo,
    rolePermissionRepo
  ) {
    this.userRoleRepo = userRoleRepo;
    this.rolePermissionRepo = rolePermissionRepo;
  }

  async hasPermission(
    userId,
    tenantId,
    permission
  ) {
    const roles =
      await this.userRoleRepo.getRoles(
        userId,
        tenantId
      );

    for (const role of roles) {
      const permissions =
        await this.rolePermissionRepo.getPermissions(
          role.id
        );

      if (permissions.includes(permission)) {
        return true;
      }
    }

    return false;
  }
}

module.exports = { RBACService };