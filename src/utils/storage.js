// LocalStorage-based JSON file system
// यह data को browser में save करता है

const STORAGE_KEYS = {
  MEMBERS: 'navdurga_members',
  VOLUNTEERS: 'navdurga_volunteers',
  DONATIONS: 'navdurga_donations'
};

// Default data
const DEFAULT_MEMBERS = [
  {
    id: 'MEM001',
    name: 'राज कुमार शर्मा',
    email: 'raj@example.com',
    phone: '+91 98765 43210',
    address: 'मसमसी, बिहार',
    membershipType: 'free',
    membershipTypeName: 'सदस्य',
    membershipAmount: 0,
    joinedDate: '01/01/2024',
    status: 'Active',
    photo: null
  },
  {
    id: 'MEM002',
    name: 'प्रिया सिंह',
    email: 'priya@example.com',
    phone: '+91 98765 43211',
    address: 'मसमसी, बिहार',
    membershipType: 'free',
    membershipTypeName: 'सदस्य',
    membershipAmount: 0,
    joinedDate: '15/01/2024',
    status: 'Active',
    photo: null
  },
  {
    id: 'MEM003',
    name: 'अमित वर्मा',
    email: 'amit@example.com',
    phone: '+91 98765 43212',
    address: 'मसमसी, बिहार',
    membershipType: 'free',
    membershipTypeName: 'सदस्य',
    membershipAmount: 0,
    joinedDate: '20/02/2024',
    status: 'Active',
    photo: null
  }
];

const DEFAULT_VOLUNTEERS = [
  {
    id: 'VOL001',
    name: 'संजय कुमार',
    age: 28,
    email: 'sanjay@example.com',
    phone: '+91 98765 43210',
    address: 'मसमसी, बिहार',
    availability: ['सुबह (6 AM - 12 PM)', 'शाम (5 PM - 10 PM)'],
    experience: 'पिछले 3 वर्षों से नवरात्रि उत्सव में सहायता कर रहा हूं',
    registeredDate: '01/03/2024',
    status: 'Active',
    hoursContributed: 24
  },
  {
    id: 'VOL002',
    name: 'रीना देवी',
    age: 25,
    email: 'reena@example.com',
    phone: '+91 98765 43211',
    address: 'मसमसी, बिहार',
    availability: ['दोपहर (12 PM - 5 PM)'],
    experience: 'भोजन वितरण में अनुभवी',
    registeredDate: '05/03/2024',
    status: 'Active',
    hoursContributed: 18
  },
  {
    id: 'VOL003',
    name: 'विकास सिंह',
    age: 32,
    email: 'vikas@example.com',
    phone: '+91 98765 43212',
    address: 'मसमसी, बिहार',
    availability: ['पूरे दिन'],
    experience: 'पंडाल निर्माण और सज्जा में 5 वर्षों का अनुभव',
    registeredDate: '10/03/2024',
    status: 'Active',
    hoursContributed: 35
  }
];

// Generic Storage Functions
export const storage = {
  // Get data from localStorage
  get: (key) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error reading from storage:', error);
      return null;
    }
  },

  // Save data to localStorage
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Error writing to storage:', error);
      return false;
    }
  },

  // Remove data from localStorage
  remove: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error removing from storage:', error);
      return false;
    }
  },

  // Clear all data
  clear: () => {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing storage:', error);
      return false;
    }
  }
};

// Members Management
export const membersStorage = {
  // Get all members
  getAll: () => {
    const members = storage.get(STORAGE_KEYS.MEMBERS);
    if (!members || members.length === 0) {
      // Initialize with default data
      storage.set(STORAGE_KEYS.MEMBERS, DEFAULT_MEMBERS);
      return DEFAULT_MEMBERS;
    }
    return members;
  },

  // Add new member
  add: (member) => {
    const members = membersStorage.getAll();
    members.push(member);
    return storage.set(STORAGE_KEYS.MEMBERS, members);
  },

  // Update member
  update: (id, updatedMember) => {
    const members = membersStorage.getAll();
    const index = members.findIndex(m => m.id === id);
    if (index !== -1) {
      members[index] = { ...members[index], ...updatedMember };
      return storage.set(STORAGE_KEYS.MEMBERS, members);
    }
    return false;
  },

  // Delete member
  delete: (id) => {
    const members = membersStorage.getAll();
    const filtered = members.filter(m => m.id !== id);
    return storage.set(STORAGE_KEYS.MEMBERS, filtered);
  },

  // Get single member
  getById: (id) => {
    const members = membersStorage.getAll();
    return members.find(m => m.id === id);
  }
};

// Volunteers Management
export const volunteersStorage = {
  // Get all volunteers
  getAll: () => {
    const volunteers = storage.get(STORAGE_KEYS.VOLUNTEERS);
    if (!volunteers || volunteers.length === 0) {
      // Initialize with default data
      storage.set(STORAGE_KEYS.VOLUNTEERS, DEFAULT_VOLUNTEERS);
      return DEFAULT_VOLUNTEERS;
    }
    return volunteers;
  },

  // Add new volunteer
  add: (volunteer) => {
    const volunteers = volunteersStorage.getAll();
    volunteers.push(volunteer);
    return storage.set(STORAGE_KEYS.VOLUNTEERS, volunteers);
  },

  // Update volunteer
  update: (id, updatedVolunteer) => {
    const volunteers = volunteersStorage.getAll();
    const index = volunteers.findIndex(v => v.id === id);
    if (index !== -1) {
      volunteers[index] = { ...volunteers[index], ...updatedVolunteer };
      return storage.set(STORAGE_KEYS.VOLUNTEERS, volunteers);
    }
    return false;
  },

  // Delete volunteer
  delete: (id) => {
    const volunteers = volunteersStorage.getAll();
    const filtered = volunteers.filter(v => v.id !== id);
    return storage.set(STORAGE_KEYS.VOLUNTEERS, filtered);
  },

  // Get single volunteer
  getById: (id) => {
    const volunteers = volunteersStorage.getAll();
    return volunteers.find(v => v.id === id);
  }
};

// Export data as JSON file (download)
export const exportToJSON = (data, filename) => {
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};

// Import data from JSON file
export const importFromJSON = (file, callback) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      callback(data);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      alert('Invalid JSON file');
    }
  };
  reader.readAsText(file);
};