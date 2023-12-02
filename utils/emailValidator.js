export const verifyEmail = async (email) => {
  try {
    const apiKey = '35eaa8e1454c4ed99404fc80b1a6a7ce';
    const response = await fetch(`https://emailvalidation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`);
    const data = await response.json();

    // Check the 'is_valid_format' field in the response
    if (data.is_valid_format.value === true && data.deliverability === 'DELIVERABLE') {
      // Email is valid
      return true;
    } else {
      // Email is invalid
      return false;
    }
  } catch (error) {
    console.error('Error verifying email:', error);
    return false;
  }
}