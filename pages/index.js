import Image from "next/image";
export default function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="w-100" style={{ maxWidth: "800px" }}>
        {/* Suggested AI Message */}
        <div className="bg-primary bg-opacity-10 border rounded-4 p-3 mb-3">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <div className="fw-semibold">
              Vanilla AI <small className="text-secondary">Suggested</small>
            </div>
            <a href="#" className="text-decoration-none fw-semibold">
              <Image
                src={`./images/0.svg`}
                width={15}
                height={15}
                className="me-2"
                style={{ cursor: "pointer", verticalAlign: "middle" }}
              />
              Regenerate
            </a>
          </div>
          <p className="mb-1">
            Oh no! Sad to hear that, but of course we can give a refund. Can you
            please provide your order number if you have one? Or email that
            you’ve used to make this purchase.
          </p>
          <a href="#" className="text-decoration-underline fw-semibold">
            Reply with this message
          </a>
        </div>

        <div className="border rounded-4 bg-white shadow-sm p-3">
          <input
            type="text"
            className="form-control border-0 mb-2 shadow-none p-0"
            placeholder="Typing"
          />

          {/* Icons below the input */}
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-3 text-muted">
              <span>
                <Image
                  src={`./images/1.svg`}
                  width={16}
                  height={16}
                  style={{ cursor: "pointer", verticalAlign: "middle" }}
                />
              </span>
              <span>
                <Image
                  src={`./images/2.svg`}
                  width={18}
                  height={18}
                  style={{ cursor: "pointer", verticalAlign: "middle" }}
                />
              </span>
              <span>
                <Image
                  src={`./images/3.svg`}
                  width={13}
                  height={18}
                  style={{ cursor: "pointer", verticalAlign: "middle" }}
                />
              </span>
              <span>
                <Image
                  src={`./images/4.svg`}
                  width={18}
                  height={18}
                  style={{ cursor: "pointer", verticalAlign: "middle" }}
                />
              </span>
              <span>
                <Image
                  src={`./images/5.svg`}
                  width={18}
                  height={18}
                  style={{ cursor: "pointer", verticalAlign: "middle" }}
                />
              </span>
              <span>
                <Image
                  src={`./images/6.svg`}
                  width={18}
                  height={18}
                  style={{ cursor: "pointer", verticalAlign: "middle" }}
                />
              </span>
              <span className="opacity-25"> |</span>
              <span>
                <Image
                  src={`./images/7.svg`}
                  width={18}
                  height={18}
                  className="me-2"
                  style={{ cursor: "pointer", verticalAlign: "middle" }}
                />
                Quick reply with AI
              </span>
            </div>
            <button className="btn btn-link py-1 px-2 bg-primary bg-opacity-10">
              <span>
                <Image src={`./images/8.svg`} width={15} height={15} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
