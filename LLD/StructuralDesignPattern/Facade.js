// Without Facade:
// Facade hides system complexity behind a single simple API.

auth.initialize();
database.connect();
cache.initialize();
logger.start();

class Application {
  start() {
    console.log("Auth Initialized");
    console.log("Database Connected");
    console.log("Cache Started");
    console.log("Logger Started");
  }
}