import { useForm } from "react-hook-form";

interface FormValues {
  myEmail: string;
  myPassword: string;
}

export default function ReactHookFormPage() {
  const { handleSubmit, register } = useForm();

  function onClickLogin(data: FormValues) {
    //loginUser API 요청하기!!!
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      이메일: <input type="text" {...register("myEmail")} />
      비밀번호: <input type="password" {...register("myPassword")} />
      <button>로그인하기</button>
    </form>
  );
}
