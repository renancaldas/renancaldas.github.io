self.onmessage = async (event) => {
  const { batch, fileMap } = event.data;

  try {
    const batchResponse = await Promise.all(
      batch.map(async (presignedUrl) => {
        const presignedUrlResponse = await fetch(presignedUrl.presigned_url, {
          method: "PUT",
          body: fileMap[presignedUrl.file_name],
        });

        return {
          presignedUrl,
          isUploadSuccess: presignedUrlResponse.ok,
        };
      })
    );

    self.postMessage({ success: true, batchResponse });
  } catch (error) {
    self.postMessage({ success: false, error });
  }
};
