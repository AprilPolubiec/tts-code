const userProfile = {
  name: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
  avatar: ''
}

function getProfileUpdate() {
  console.log('Updating profile...')
  return { property: 'name', value: 'April' }
}

function updateProfile(newProfile, user) {
  Object.assign(user, newProfile)
}

var user = Object.create(userProfile)

updateProfile(
  {
    name: 'April',
    address: 'My house',
    city: 'My city',
    state: 'My state',
    zipcode: '12345',
    avatar: ':)'
  },
  user
)
console.log(user)