test('Buscar Peliculas ene ste caso Star Wars',async()=>{
    const mockOnSearch = jest.fn();
    render(<Menu />);   
    const searchWord = await screen.getByPlaceholderText('SEARCH')

    fireEvent.click(searchWord, {target: {value: 'Star Wars'}})

    await waitFor(()=>{
        return expect(mockOnSearch).toHaveBeenCAlledWith('Star Wars')
    });
});