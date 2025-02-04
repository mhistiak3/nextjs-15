
const LoginLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <h5>Header</h5>
      {children}
    </div>
  );
};

export default LoginLayout;
