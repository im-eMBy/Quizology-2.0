import { SuggestForm } from "../components/Suggest/SuggestForm";
import { SuggestPreview } from "../components/Suggest/SuggestPreview";
import { SuggestValidate } from "../components/Suggest/SuggestValidate";

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