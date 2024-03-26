    // See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'inventory';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
                   itemId: { type: String, unique: false, lowercase: false, default: '' },
       itemName: { type: String, unique: false, lowercase: false, default: '' },
       category: { type: String, unique: false, lowercase: false, default: '' },
       unitOfMeasure: { type: String, unique: false, lowercase: false, default: '' },
       quantityOnHand: { type: String, unique: false, lowercase: false, default: '' },
       minimumStockLevel: { type: String, unique: false, lowercase: false, default: '' },
       maximumStockLevel: { type: String, unique: false, lowercase: false, default: '' },
       reorderPoint: { type: String, unique: false, lowercase: false, default: '' },
       supplierVendor: { type: String, unique: false, lowercase: false, default: '' },
       Empty: { type: String, unique: false, lowercase: false, default: '' },

            
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