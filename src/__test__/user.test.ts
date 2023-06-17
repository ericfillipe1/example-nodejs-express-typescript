import app from '#/app';
import UserModel from '#/repositories/models/user.model';
import request from 'supertest';

describe('users', () => {
  it('test find users', async () => {
    const expectedResponse = [
      {
        username: 'ericfillipe',
        password: '1234',
        email: 'ericfillipe@gmail.com',
      },
    ];
    const mockFind = jest.fn().mockImplementation(() => {
      return {
        exec: () => {
          return Promise.resolve([
            {
              username: 'ericfillipe',
              password: '1234',
              email: 'ericfillipe@gmail.com',
            },
          ]);
        },
      };
    });
    jest.spyOn(UserModel, 'find').mockReturnValue(mockFind());
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponse);
  });
});
