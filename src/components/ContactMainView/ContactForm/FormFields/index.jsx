import { StyledCheckbox, StyledTextAreaInput, StyledTextInput } from './FormFields.styles';

export function TextInput({ watch, register, text, inputConditions, name, required = false }) {
  return (
    <StyledTextInput notEmpty={watch()[name]?.length} required={required}>
      <label htmlFor={name}>
        <input id={name} name={name} type="text" {...register(name, inputConditions)} />
        <p>{text}</p>
      </label>
    </StyledTextInput>
  );
}

export const TextArea = ({ watch, text, register, placeholderText, name, inputConditions, required }) => {
  return (
    <StyledTextAreaInput notEmpty={watch()[name]?.length} required={required}>
      <label htmlFor={name}>
        <textarea rows="8" id={name} name={name} placeholder={placeholderText} {...register(name, inputConditions)} />
        <p>{text}</p>
      </label>
    </StyledTextAreaInput>
  );
};

export const CheckboxInput = ({ text, register, required, name, placeholderText, inputConditions }) => {
  return (
    <StyledCheckbox required={required}>
      <label htmlFor={name}>
        <input id={name} name={name} type="checkbox" placeholder={placeholderText} {...register(name, inputConditions)} />
        <p>{text}</p>
      </label>
    </StyledCheckbox>
  );
};
//
// export const SelectInput = ({ watch, register }) => {
//   return (
//     <StyledSelectInput notEmpty={watch().length}>
//       <label htmlFor="message">
//         <p className="input-select__title">Skąd o nas wiesz?</p>
//         <select id="message" {...register('iotenWhy')}>
//           <option value="none" />
//           <option value="Reklama">Reklama</option>
//           <option value="Social media">Social media</option>
//           <option value="Od innej osoby">Od innej osoby</option>
//           <option value="Inne">Inne</option>
//         </select>
//       </label>
//     </StyledSelectInput>
//   );
// };
