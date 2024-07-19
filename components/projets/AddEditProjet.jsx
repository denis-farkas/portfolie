import { useRouter } from "next/router";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { projetService, alertService, userService } from "services";
// composant AddEdit est utilisé à la fois pour ajouter et modifier des horaires, il contient un formulaire construit avec la bibliothèque React Hook Form et est utilisé par la page d'ajout d'utilisateur et la page de modification d'utilisateur .

export { AddEditProjet };

function AddEditProjet(props) {
  const projet = props?.projet;
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  const handleUpload = async () => {
    try {
      if (selectedFiles.length < 4) return;
      for (let i = 0; i < 4; i++) {
        const formData = new FormData();
        formData.append("image", selectedFiles[i]);
        const { data } = await axios.post("/api/fileupload", formData);
      }
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  // Les règles de validation de formulaire sont définies avec la bibliothèque de validation de schéma Yup et transmises avec la fonction formOptionsReact Hook Form useForm()
  // form validation rules
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Un contenu est requis"),
    content: Yup.string().required("Un contenu est requis"),
    year: Yup.string().required("Un contenu est requis"),
    url_live: Yup.string().required("Un contenu est requis"),
    frontend: Yup.string().required("Un contenu est requis"),
    backend: Yup.string().required("Un contenu est requis"),
    domain: Yup.string().required("Un contenu est requis"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  // set default form values if in edit mode
  if (projet) {
    formOptions.defaultValues = props.projet;
  }

  // get functions to build form with useForm() hook
  // La useForm()fonction hook renvoie un objet avec des méthodes pour travailler avec un formulaire, notamment l'enregistrement des entrées, la gestion de la soumission du formulaire, la réinitialisation du formulaire, l'accès à l'état du formulaire, l'affichage des erreurs et plus encore
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  // La onSubmitfonction est appelée lorsque le formulaire est soumis et valide, et crée ou met à jour un utilisateur en fonction du mode dans lequel il se trouve.

  async function onSubmit(data) {
    data.image1 = selectedFiles[0].name;
    data.image2 = selectedFiles[1].name;
    data.image3 = selectedFiles[2].name;
    data.image4 = selectedFiles[3].name;
    alertService.clear();
    try {
      // create or update event based on event prop
      let message;
      if (projet) {
        await projetService.update(projet.id, data);
        message = "projet modifiée";
      } else {
        await projetService.register(data);
        message = "projet ajoutée";
      }

      // redirect to projet list with success message
      router.push("/projets/admin");
      alertService.success(message, true);
    } catch (error) {
      alertService.error(error);
      console.error(error);
    }
  }
  if (user) {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="mb-3 col">
            <label className="form-label">Nom</label>
            <input
              name="name"
              type="text"
              {...register("name")}
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.name?.message}</div>
          </div>
          <div className="mb-3 col">
            <label className="form-label">Description</label>
            <textarea
              name="content"
              type="text"
              {...register("content")}
              className={`form-control ${errors.content ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.content?.message}</div>
          </div>
          <div className="mb-3 col">
            <label className="form-label">Année</label>
            <input
              name="year"
              type="number"
              {...register("year")}
              className={`form-control ${errors.year ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.year?.message}</div>
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col">
            <label className="form-label">Frontend</label>
            <textarea
              name="frontend"
              type="text"
              {...register("frontend")}
              className={`form-control ${errors.frontend ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.frontend?.message}</div>
          </div>
          <div className="mb-3 col">
            <label className="form-label">Backend</label>
            <textarea
              name="backend"
              type="text"
              {...register("backend")}
              className={`form-control ${errors.backend ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.backend?.message}</div>
          </div>
          <div className="mb-3 col">
            <label className="form-label">Version live</label>
            <input
              name="url_live"
              type="text"
              {...register("url_live")}
              className={`form-control ${errors.url_live ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.url_live?.message}</div>
          </div>
        </div>
        <div className="row">
          <div className="mb-3 col">
            <label className="form-label">Domaine</label>
            <input
              name="domain"
              type="text"
              {...register("domain")}
              className={`form-control ${errors.domain ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.domain?.message}</div>
          </div>

          <div className="row">
            <div className="mb-3 col">
              <div className="max-w-4xl mx-auto p-20 space-y-6">
                <label>
                  <input
                    type="file"
                    hidden
                    onChange={({ target }) => {
                      if (target.files) {
                        const file = target.files[0];
                        setSelectedImages((selectedImages) => [
                          ...selectedImages,
                          URL.createObjectURL(file),
                        ]);
                        setSelectedFiles((selectedFiles) => [
                          ...selectedFiles,
                          file,
                        ]);
                      }
                    }}
                  />
                  <div className="w-40 aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer">
                    {selectedImages[0] ? (
                      <Image src={selectedImages[0]} alt="" />
                    ) : (
                      <span className="btn btn-primary me-2">
                        Choisir Image 1
                      </span>
                    )}
                  </div>
                </label>
              </div>
            </div>
            <div className="mb-3 col">
              <div className="max-w-4xl mx-auto p-20 space-y-6">
                <label>
                  <input
                    type="file"
                    hidden
                    onChange={({ target }) => {
                      if (target.files) {
                        const file = target.files[0];
                        setSelectedImages((selectedImages) => [
                          ...selectedImages,
                          URL.createObjectURL(file),
                        ]);
                        setSelectedFiles((selectedFiles) => [
                          ...selectedFiles,
                          file,
                        ]);
                      }
                    }}
                  />
                  <div className="w-40 aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer">
                    {selectedImages[1] ? (
                      <Image src={selectedImages[1]} alt="" />
                    ) : (
                      <span className="btn btn-primary me-2">
                        Choisir Image 2
                      </span>
                    )}
                  </div>
                </label>
              </div>
            </div>
            <div className="mb-3 col">
              <div className="max-w-4xl mx-auto p-20 space-y-6">
                <label>
                  <input
                    type="file"
                    hidden
                    onChange={({ target }) => {
                      if (target.files) {
                        const file = target.files[0];
                        setSelectedImages((selectedImages) => [
                          ...selectedImages,
                          URL.createObjectURL(file),
                        ]);
                        setSelectedFiles((selectedFiles) => [
                          ...selectedFiles,
                          file,
                        ]);
                      }
                    }}
                  />
                  <div className="w-40 aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer">
                    {selectedImages[2] ? (
                      <Image src={selectedImages[2]} alt="" />
                    ) : (
                      <span className="btn btn-primary me-2">
                        Choisir Image 3
                      </span>
                    )}
                  </div>
                </label>
              </div>
            </div>
            <div className="mb-3 col">
              <div className="max-w-4xl mx-auto p-20 space-y-6">
                <label>
                  <input
                    type="file"
                    hidden
                    onChange={({ target }) => {
                      if (target.files) {
                        const file = target.files[0];
                        setSelectedImages((selectedImages) => [
                          ...selectedImages,
                          URL.createObjectURL(file),
                        ]);
                        setSelectedFiles((selectedFiles) => [
                          ...selectedFiles,
                          file,
                        ]);
                      }
                    }}
                  />
                  <div className="w-40 aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer">
                    {selectedImages[3] ? (
                      <Image src={selectedImages[3]} alt="" />
                    ) : (
                      <span className="btn btn-primary me-2">
                        Choisir Image 4
                      </span>
                    )}
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <button
              type="submit"
              disabled={
                formState.isSubmitting || Object.keys(selectedFiles).length < 3
              }
              onClick={handleUpload}
              className="btn btn-primary me-2"
            >
              {formState.isSubmitting && (
                <span className="spinner-border spinner-border-sm me-1"></span>
              )}
              {selectedFiles.length < 4 && (
                <span className="me-1">
                  Sélectionnez les 4 images avant d&apos;
                </span>
              )}
              Enregistrer
            </button>
            <button
              onClick={() => reset(formOptions.defaultValues)}
              type="button"
              disabled={formState.isSubmitting}
              className="btn btn-secondary"
            >
              Reset
            </button>
            <Link href="/projets" className="btn btn-link">
              Annuler
            </Link>
          </div>
        </div>
      </form>
    );
  }
}
