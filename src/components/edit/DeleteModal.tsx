import Buttons from "./Buttons";

interface DeleteModalProps {
  isDeleteModalOpen: boolean;
  setIsDeleteModalOpen: (value: boolean) => void;
  handleDeleteInvoice: () => void
}
export default function DeleteModal(props: DeleteModalProps) {
  const { isDeleteModalOpen, setIsDeleteModalOpen, handleDeleteInvoice } = props;
  return (
    <section className="absolute   text-white -top-6 left-0 bg-black bg-opacity-40 w-full h-full">
      <div className="absolute w-[480px]  shadow-2xl h-[240px] rounded-lg space-y-4 p-10 bg-[#1e2139] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold">Confirm Deletion</h1>
          <h1 className="text-[15px]  text-[#888eb0]">
            Are you sure you want to delete invoice id? This action cannot be
            undone
          </h1>
        </div>
        <div className="flex gap-x-4 justify-end items-center">
          <Buttons
          handleDeleteInvoice={handleDeleteInvoice}
            text="Cancel"
            isDeleteModalOpen={isDeleteModalOpen}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
          />
        </div>
      </div>
    </section>
  );
}
