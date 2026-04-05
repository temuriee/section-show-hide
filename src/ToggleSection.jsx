import { useState } from "react";

function ToggleSection() {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible((prev) => !prev); // შეცვლა true ↔ false
  };

  return (
    <div className="p-5">
      <button onClick={handleToggle} className="mb-[10px]">
        {isVisible ? "Hide Section" : "Show Section"}
      </button>

      {isVisible && (
        <section className="p-5 bg-[#f0f0f0]">
          <h2>Showed</h2>
          <p>Hello User</p>
        </section>
      )}
    </div>
  );
}

export default ToggleSection;
