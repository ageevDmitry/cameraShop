export type Review = {
    id: string;
    userName: string;
    advantage: string;
    disadvantage: string;
    review: string;
    rating: number;
    createAt: string;
    cameraId: number;
      }

export type ReviewPost = {
    userName: string;
    advantage: string;
    disadvantage: string;
    review: string;
    rating: number;
    cameraId: number;
}
