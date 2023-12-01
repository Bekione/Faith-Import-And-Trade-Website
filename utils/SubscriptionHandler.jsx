
export const SubscriptionHandler = async ( event ) => {
    event.preventDefault();

    setSubmitting(true);
    const formData = event.target;
    const senderEmail = formRef.current.elements.reply_to.value;
    const senderName = formRef.current.elements.from_name.value;

    try {
      await emailjs.sendForm(
        "service_ma95etu",
        "template_apt5x5s",
        formData,
        "DPGDAD-VswlhMnw7_",
        {
          from_name: senderName,
          reply_to: senderEmail,
        }
      );

      console.log("Subscription added successfully. ");

      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
      formRef.current.reset();
      setSubmitting(false);
    } catch (error) {
      console.log("Error processing request. ", error);
      setNotSubscribed(true);
      setTimeout(() => {
        setNotSubscribed(false);
      }, 3000);
    } finally {
      setSubmitting(false);
    }
}
