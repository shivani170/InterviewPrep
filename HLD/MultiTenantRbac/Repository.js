class UserRoleRepository {
  constructor(collection) {
    this.collection = collection;
  }

  async getRoles(userId, tenantId) {
    return await this.collection.find({
      userId,
      tenantId
    }).toArray();
  }
}

class RolePermissionRepository {
  constructor(collection) {
    this.collection = collection;
  }

  async getPermissions(roleId) {
    const docs = await this.collection.find({
      roleId
    }).toArray();

    return docs.map(d => d.permission);
  }
}

module.exports = { UserRoleRepository, RolePermissionRepository };