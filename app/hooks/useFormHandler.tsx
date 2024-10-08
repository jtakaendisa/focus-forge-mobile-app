import { zodResolver } from '@hookform/resolvers/zod';
import { DefaultValues, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { ZodType } from 'zod';

type Props<T extends FieldValues> = {
  schema: ZodType<T>;
  defaultValues: DefaultValues<T>;
  onSubmit: SubmitHandler<T>;
};

const useFormHandler = <T extends FieldValues>({
  schema,
  defaultValues,
  onSubmit,
}: Props<T>) => {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<T>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const watchAllFields = watch();

  const handleFormSubmit = handleSubmit(async (data) => {
    try {
      await onSubmit(data);
      reset();
    } catch (error) {
      console.error(error);
    }
  });

  return {
    control,
    errors,
    watchAllFields,
    handleFormSubmit,
  };
};

export default useFormHandler;
