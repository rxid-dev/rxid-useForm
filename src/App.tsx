import { Components } from "./shared/components";

function App() {
  const handleSubmit = () => {
    console.log("INFO: Come from handleSubmit");
  };

  return (
    <div className="container py-4">
      <h1>Create Custom useForm Tutorial</h1>
      <p>Welcome to create our own useForm ("rxid-useForm")</p>

      <Components.Card header="User">
        <Components.Form>
          <Components.FormGroup label="Username" required={true}>
            <input
              type="text"
              placeholder="Masukkan username Anda"
              className="form-control"
            />
            <small className="text-danger">Username wajib diisi</small>
          </Components.FormGroup>

          <Components.FormGroup label="Nama" required={true}>
            <input
              type="text"
              placeholder="Masukkan nama Anda"
              className="form-control"
            />
            <small className="text-danger">Nama wajib diisi</small>
          </Components.FormGroup>

          <Components.FormGroup label="Email" required={true}>
            <input
              type="text"
              placeholder="Masukkan email Anda"
              className="form-control"
            />
            <small className="text-danger">Email wajib diisi</small>
          </Components.FormGroup>

          <Components.FormGroup label="Password" required={true}>
            <input
              type="password"
              placeholder="Masukkan password Anda"
              className="form-control"
            />
            <small className="text-danger">Password wajib diisi</small>
          </Components.FormGroup>

          <Components.FormGroup label="Tanggal Lahir" required={true}>
            <input
              type="date"
              placeholder="Pilih tanggal lahir Anda"
              className="form-control"
            />
            <small className="text-danger">Tanggal lahir wajib dipilih</small>
          </Components.FormGroup>

          {/* use auto complete */}
          <Components.FormGroup label="Tempat Lahir" required={true}>
            <input
              type="text"
              placeholder="Pilih tempat lahir Anda"
              className="form-control"
            />
            <small className="text-danger">Tempat lahir wajib dipilih</small>
          </Components.FormGroup>

          <Components.FormGroup label="Jumlah Saudara" required={true}>
            <input
              type="number"
              placeholder="Masukkan jumlah saudara Anda"
              className="form-control"
            />
            <small className="text-danger">Jumlah saudara wajib diisi</small>
          </Components.FormGroup>

          <Components.FormGroup
            label="Jumlah Penghasilan Per Tahun"
            required={true}
          >
            <input
              type="text"
              placeholder="Masukkan jumlah penghasilan per tahun Anda"
              className="form-control"
            />
            <small className="text-danger">
              Jumlah penghasilan per tahun wajib diisi
            </small>
          </Components.FormGroup>

          <Components.FormGroup label="Jenis kelamin">
            <div className="form-check">
              <input
                type="radio"
                id="customRadio1"
                name="customRadio"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="customRadio1">
                Laki-laki
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="customRadio2"
                name="customRadio"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="customRadio2">
                Perempuan
              </label>
            </div>
            <small className="text-danger">Jenis kelamin wajib dipilih</small>
          </Components.FormGroup>

          <Components.FormGroup label="Hobi">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck1"
              />
              <label className="form-check-label" htmlFor="customCheck1">
                Singing
              </label>
            </div>
            <small className="text-danger">Hobi wajib diisi</small>
          </Components.FormGroup>

          <Components.FormGroup label="Pendidikan Terakhir">
            <select className="form-select" defaultValue="">
              <option value="">Open this select menu</option>
              <option value="1">SD</option>
              <option value="2">SMP</option>
              <option value="3">SMA</option>
              <option value="3">S1</option>
              <option value="3">S2</option>
              <option value="3">S3</option>
            </select>
            <small className="text-danger">Hobi wajib diisi</small>
          </Components.FormGroup>
        </Components.Form>

        <div className="text-end">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </Components.Card>
    </div>
  );
}

export default App;
