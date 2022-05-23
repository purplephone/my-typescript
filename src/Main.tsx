import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input, Text } from "./elements";

type FormData = {
  title: string;
  menu: string;
  job: string | number;
};

type Option = {
  label: string;
  value: string | number;
};

const options: Option[] = [
  { label: "title", value: "title" },
  { label: "menu", value: "menu" },
];

const Main = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  // ??
  // firstName and lastName will have correct type

  return (
    <form onSubmit={onSubmit}>
      <Text bold type="line" titleText="제목" margin="5px 0 5px 0" />
      <Input width="100%" name="title" control={control} />

      <Text bold type="line" titleText="메뉴" margin="5px 0 5px 0" />
      <Input width="100%" name="menu" control={control} />
      {errors.menu?.type === "required" && (
        <div style={{ color: "red" }}>메뉴는 필수로 입력해야합니다.</div>
      )}

      <select {...register("job")}>
        {options.map((op, i) => {
          return (
            <option label={op.label} value={op.value} key={op.value}></option>
          );
        })}
      </select>
      <input type="submit"></input>
    </form>
  );
};

export default Main;
