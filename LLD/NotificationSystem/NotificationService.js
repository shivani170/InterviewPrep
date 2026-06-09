
class RateLimiter {
    constructor(limit){
        this.limit = limit
        this.countMap = new Map() // userId => count
    }

    allow(userId){
        const current = this.countMap.get(userId) || 0;
        if(current >= this.limit){
            return false
        }
        this.countMap.set(userId, current + 1)
        return true;
    }

}

class PreferenceService{
    constructor(repo){
        this.repo = repo
    }

    getChannels(userId, eventType){
        const pref = this.repo.get(userId);
        return pref[eventType] || []

    }
}

class TemplateService {
  constructor(templateRepo) {
    this.templateRepo = templateRepo; // templateId => template(string)
  }

  render(templateId, variables) { // variables = [{user: "Shivani", orderId: "1234"}]
    let template = this.templateRepo.get(templateId);

    if (!template) return "";

    Object.keys(variables).forEach(key => {
      template = template.replace(`{{${key}}}`, variables[key]);
    });

    return template;
  }
}

module.exports = {RateLimiter, PreferenceService, TemplateService}