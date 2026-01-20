const LabelOptions = () => {
  return (
    <>
      <option className="bg-applied text-white" value="Applied">
        Applied
      </option>
      <option className="bg-interview text-white" value="Interview">
        Interview
      </option>
      <option className="bg-offer text-white" value="Offer">
        Offer
      </option>
      <option className="bg-rejected text-white" value="Rejected">
        Reject
      </option>
    </>
  );
};

export default LabelOptions;
