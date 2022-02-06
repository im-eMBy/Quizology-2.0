import { SuggestForm } from "../components/SuggestForm";
import { SuggestPreview } from "../components/SuggestPreview";

export const SuggestQuestion: React.FC = () => {


   return <div className='suggest__container-outer'>
      {/* <SuggestQuestionValidate questionData={question} onSend={handleQuestionSend}/> */}
      <div className='suggest__container-inner'>
         <SuggestForm />
         <SuggestPreview />
      </div>
   </div>
}