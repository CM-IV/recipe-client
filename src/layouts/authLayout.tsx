import { Wrapper } from "../components/wrapper";
import { Footer } from "../components/footer";

const AuthLayout = (props: any) => {
  return (
    <Wrapper>
      {props.children}
      <Footer />
    </Wrapper>
  );
};

export { AuthLayout };