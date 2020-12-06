import React, {useState} from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import TextInput from '../../components/Inputs/TextInput'
import { Formik } from 'formik';
import * as Yup from 'yup';
import routeNames from '../../navigation/routeNames';

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
  email: '',
  password: '',
};
const renderPlaceHolder = (value) => {
  const placeholder = {
    email: 'Email',
    password: 'Contraseña',
  };
  return placeholder[value] || '';
};
const handleRenderInput = (values, errors, touched, setFieldValue, handleBlur) => {
  const arrayInput = Object.keys(initialValues);
  console.log("touched:",touched,values)
  return arrayInput.map((item) =>{  
    return (
    <TextInput
      name={item}
      value={values[initialValues[item]]}
      placeholder={renderPlaceHolder(item)}
      touched={touched[item]}
      error={errors[item]}
      onChange={(text) => setFieldValue(item, text)}
      handleBlur={handleBlur(item)}
    />
  )})
}
function submitForm(values) {
  console.log(values);
}
const Login = ({ navigation }) => {
  const [submitEnabled, setSubmitEnabled] = useState(true);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Formik
        initialValues={initialValues}
        onSubmit={submitForm}
        validationSchema={Schema}>
        {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue, touched}) => (
          <>
            {handleRenderInput(values, errors, touched, setFieldValue, handleBlur)}
            <Button title="Submit" onPress={submitForm(values), () => navigation.navigate(routeNames.Home)} />
          </>
        )}
      </Formik>
    </View>
  );
};

export default Login;
