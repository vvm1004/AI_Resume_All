import { DataContext } from "@/context/DataContext";
import { useContext } from "react";

function ProfessionalSummaryPreview() {
  const { data, setData } = useContext(DataContext);


  return(
    <>
      <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">Profile</h2>
          <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: data.summery }}>
          </div>
        </div>
    </>
  );
}

export default ProfessionalSummaryPreview;