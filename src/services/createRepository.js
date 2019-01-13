const createRepository = payload => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        success: true,
        payload,
        message: 'repository is successfully created.',
      })
    }, 2000)
  })
}

export default createRepository
