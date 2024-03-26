    // See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'maintenanceRequests';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   buildingid: { type: String, unique: false, lowercase: false, default: '' },
       userid: { type: String, unique: false, lowercase: false, default: '' },
       description: { type: String, unique: false, lowercase: false, default: '' },
       category: { type: String, unique: false, lowercase: false, default: '' },
       priority: { type: String, unique: false, lowercase: false, default: '' },
       status: { type: String, unique: false, lowercase: false, default: '' },
       reporteddate: { type: String, unique: false, lowercase: false, default: '' },
       completeddate: { type: String, unique: false, lowercase: false, default: '' },

            
          },
          {
            timestamps: true
        });
      
        // This is necessary to avoid model compilation errors in watch mode
        // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };