import mongoose from 'mongoose';
const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  institute: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  otherDepartment: {
    type: String,
  },
  researchTopic: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  otherService: {
    type: String,
  },
}, { timestamps: true });

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);