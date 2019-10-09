import React from 'react';
import { Question } from '../../model';
import QuestionCard from '../../components/questionCard';
import { questions } from '../../mock';
interface Props { }

interface MyState {
  questions: Question[];
}
class QuestionsPage extends React.Component<Props, MyState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      questions
    };

  }
  getQuestionListView = (questions: Question[]) => {
    return questions.map((question, index) => <QuestionCard title={'Question' + (index + 1)} content={question.question}></QuestionCard>)
  }

  render() {
    return (
      <div>
        {this.getQuestionListView(this.state.questions)}
        <button className="btn waves-effect waves-light" type="submit" name="action">Start Survey
              <i className="material-icons right">send</i>
        </button>

      </div>
    );
  }
}

export default QuestionsPage;


