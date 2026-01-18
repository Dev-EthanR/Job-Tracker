const LabelOptions = () => {
  return (
    <>
      <option className="bg-applied" value="Applied">
        Applied
      </option>
      <option className="bg-interview" value="Interview">
        Interview
      </option>
      <option className="bg-offer" value="Offer">
        Offer
      </option>
      <option className="bg-rejected" value="Rejected">
        Reject
      </option>
    </>
  );
};

export default LabelOptions;
