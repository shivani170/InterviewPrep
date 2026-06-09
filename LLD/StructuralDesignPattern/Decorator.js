// Original service:

class ApiService {
  fetchUsers() {
    console.log("Fetching users...");
  }
}

// Requirement:
// Add logging without changing ApiService.

class LoggingDecorator {
  constructor(apiService) {
    this.apiService = apiService;
  }

  fetchUsers() {
    console.log("Request Started");

    this.apiService.fetchUsers();

    console.log("Request Completed");
  }
}

const logging = new LoggingDecorator(new ApiService())
logging.fetchUsers()


Client => LoggingDecorator => ApiService