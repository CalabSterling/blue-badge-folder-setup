import { presidentsArray } from './presidentconstant';
import PresidentChild from './PresidentChild';

function PresidentParent() {
    
    return (
        <div>
            {presidentsArray.filter(dead => dead.passed === undefined).map(president => <PresidentChild president={president} />)}
            *****************************
            {presidentsArray.filter(dead => dead.passed !== undefined).map(president => <PresidentChild president={president} />)}

        </div>
        )
}

export default PresidentParent;