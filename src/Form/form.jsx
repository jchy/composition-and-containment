export const Form = (props) => {
  const { children, handleSubmit } = props;
  console.log(children, handleSubmit);
  return <form onSubmit={handleSubmit}>{children}</form>;
};
