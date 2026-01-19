const LabelOptions = () => {
  return (
    <>
      <option className="bg-applied text-text" value="Applied">
        Applied
      </option>
      <option className="bg-interview text-text" value="Interview">
        Interview
      </option>
      <option className="bg-offer text-text" value="Offer">
        Offer
      </option>
      <option className="bg-rejected text-text" value="Rejected">
        Reject
      </option>
    </>
  );
};

export default LabelOptions;
