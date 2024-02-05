interface props {
  children: string;
}

const ChildrenImplementation = ({ children }: props) => {
  return <div>hey {children}</div>;
};

export default ChildrenImplementation;
