import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker';
import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";



const App = () => {
    return (
        <div className="ui container comments">
            {/* passing the cpmmenDetail component as a child property of approvalCard component */}
            <ApprovalCard>
                <div>
                    <h4>WARNING!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Sammuel"
                    timeAgo="Today at 4:40PM"
                    comment="The Quick Brown Fox jumps over the lazydog"
                    imgSrc={faker.image.image()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Joel"
                    timeAgo="Today at 5:40PM"
                    comment="The Quick Brown Fox jumps over the lazydog"
                    imgSrc={faker.image.image()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Julie"
                    timeAgo="Today at 6:40PM"
                    comment="The Quick Brown Fox jumps over the lazydog"
                    imgSrc={faker.image.image()}
                />
            </ApprovalCard>
        </div>
    );
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);