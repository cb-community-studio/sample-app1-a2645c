    // See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'employee';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   name: { type: String, unique: false, lowercase: false, default: '' },
       employeeId: { type: String, unique: false, lowercase: false, default: '' },
       dob: { type: String, unique: false, lowercase: false, default: '' },
       gender: { type: String, unique: false, lowercase: false, default: '' },
       phone: { type: String, unique: false, lowercase: false, default: '' },
       email: { type: String, unique: false, lowercase: false, default: '' },
       address: { type: String, unique: false, lowercase: false, default: '' },
       employment: { type: String, unique: false, lowercase: false, default: '' },
       status: { type: String, unique: false, lowercase: false, default: '' },
       hire: { type: String, unique: false, lowercase: false, default: '' },
       date: { type: String, unique: false, lowercase: false, default: '' },
       terminationDate: { type: String, unique: false, lowercase: false, default: '' },
       job: { type: String, unique: false, lowercase: false, default: '' },
       title: { type: String, unique: false, lowercase: false, default: '' },
       department: { type: String, unique: false, lowercase: false, default: '' },

            
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