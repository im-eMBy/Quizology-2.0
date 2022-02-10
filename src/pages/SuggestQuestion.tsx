import { SuggestForm } from "../components/SuggestForm";
import { SuggestPreview } from "../components/SuggestPreview";
import { SuggestValidate } from "../components/SuggestValidate";

import "../scss/_suggest.scss";

export const SuggestQuestion: React.FC = () => {

   return <div className='suggest__container-outer'>
      <div className='suggest__container-inner'>
         <SuggestPreview />
         <SuggestForm />
      </div>
      <SuggestValidate />
   </div>
}