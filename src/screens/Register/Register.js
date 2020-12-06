import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextInput from '../../components/Inputs/TextInput'

const Schema = Yup.object().shape({
  email: Yup.string()
    .email('Ingresa un email valido.')
    .required('Debes añadir un email.'),
  password: Yup.string()
    .required('Debes añadir una contraseña.')
    .min(7, 'Tu contraseña debe tener al menos 7 caracteres.')
    .max(16, 'Tu contraseña no puede tener mas de 16 caracteres.'),
});

const initialValues = {
  nombre: '',
  apellido: '',
  email: '',
  password: '',
};
const renderPlaceHolder = (value) => {
  const placeholder = {
    nombre: 'Nombre',
    apellido: 'Apellido',
    email: 'Email',
    password: 'Contraseña',
    repassword: 'Repetir Contraseña'
  };
  return placeholder[value] || '';
};
const handleRenderInput = (values, errors, touched, setFieldValue, handleBlur) => {
  const arrayInput = Object.keys(initialValues);
  console.log(touched)
  return arrayInput.map((item) => (
    <TextInput
      value={values[initialValues[item]]}
      placeholder={renderPlaceHolder(item)}
      touched={touched[item]}
      error={errors[item]}
      handleBlur={handleBlur(item)}
      onChange={(text) => setFieldValue(item, text)}
    />
  ));
};
const submitForm = (values) => {
  console.log(values, 'values formik');
};

function Register({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Formik
        initialValues={initialValues}
        onSubmit={submitForm}
        validationSchema={Schema}>
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue, }) => (
          <>
            {handleRenderInput(values, errors, touched, setFieldValue, handleBlur)}
            <Button title="Submit" onPress={submitForm(values)} />
          </>
        )}
      </Formik>
    </View>
  );
}

export default Register;
