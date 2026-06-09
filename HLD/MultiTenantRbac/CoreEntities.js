class Tenant {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class User {
  constructor(id, email) {
    this.id = id;
    this.email = email;
  }
}

class Role {
  constructor(id, tenantId, name) {
    this.id = id;
    this.tenantId = tenantId;
    this.name = name;
  }
}

class Permission {
  constructor(id, resource, action) {
    this.id = id;
    this.resource = resource;
    this.action = action;
  }
}
